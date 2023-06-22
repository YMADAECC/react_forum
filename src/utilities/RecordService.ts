import { query, collection, orderBy, limit, getDocs } from "firebase/firestore"
import { db } from "./firebase"
import Record from "../entities/Record"

class RecordService {

	static async readRecords(): Promise<Record[] | null> {
		
		// Firestoreへの読み取りクエリを用意しておく
		const q = query(
			collection(db, "records"),
			orderBy("score", "desc"),
			limit(100)
		)

		try {

			// Firestoreデータベース(サーバーもしくはキャッシュ)から読み取り
			const querySnapshot = await getDocs(q)

			// 成功の場合
			console.log(`SUCCESS! Read ${querySnapshot.size} documents.`)

			// recordの配列を作成
			let records: Record[] = []
			querySnapshot.forEach((doc) => {

				// ドキュメントの各フィールドの値を取り出す
				const id: string = doc.id ?? ""
				const createdAt: Date = doc.data({ serverTimestamps: "estimate" }).createdAt.toDate()
				const userId: string = doc.data().userId ?? ""
				const nickname: string = doc.data().nickname ?? ""
				const score: number = doc.data().score ?? 0
				const newsIds: string[] = doc.data().newsIds ?? []

				// 値を使ってRecordオブジェクトを作成
				const record: Record = {
					id: id,
					createdAt: createdAt,
					userId: userId,
					nickname: nickname,
					score: score,
					newsIds: newsIds
				}

				// 配列に追加していく
				records.push(record)
			})

			return records

		} catch (error) {

			// 失敗の場合
			// ログ出力して、nullを返す
			console.log(`FAIL! Error reading records. ${error}`)
			return null
		}
	}
}

export default RecordService