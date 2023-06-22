import { initializeApp } from 'firebase/app'
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore"

// .envファイルに書いてある環境変数を元に、Firebaseプロジェクトの構成情報をまとめる
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
	measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

// 構成情報を元に、Firebaseを初期化
const app = initializeApp(firebaseConfig)

// キャッシュ読み取りを有効にした上で、Cloud Firestoreサービスへの参照を取得
const db = initializeFirestore(app, {
	localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
})

// データベースへの参照をエクスポート
export { db }