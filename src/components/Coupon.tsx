import { useNavigate } from 'react-router-dom';

export default function Coupon() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '120px 2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>WEB COUPON</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
        クーポンをご利用の方は、以下のフォームよりご予約ください。
      </p>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <input type="text" placeholder="お名前" required />
        <input type="email" placeholder="メールアドレス" required />
        <input type="datetime-local" placeholder="希望日時" required />
        <select required>
          <option value="">メニューを選択</option>
          <option value="basic">シンプルコース</option>
          <option value="design">デザインコース</option>
        </select>
        <button type="submit" style={{
          background: '#f9b5c1',
          border: 'none',
          padding: '0.75rem',
          borderRadius: '30px',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          予約する
        </button>
      </form>

      <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '2rem' }}>
        ※送信後、確認メールが届きます。<br />
        ※ご希望の日時に添えない場合は、別途ご連絡いたします。
      </p>

      {/* 戻るボタン */}
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '3rem',
          padding: '0.6rem 1.5rem',
          borderRadius: '30px',
          background: '#ccc',
          color: '#333',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        トップに戻る
      </button>
    </div>
  );
}
