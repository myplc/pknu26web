import { useState } from "react";
import style1 from './Ex16.module.css';
import table from './ex16.data';

const Table = () => {
  const [ea, setEa] = useState(Array(table.length).fill(0));

  const handleNum = (e) => {
    const { id, value } = e.target;
    const newEa = [...ea];
    // 음수가 입력되지 않도록 보장하고 숫자로 파싱합니다.
    const numValue = Math.max(0, parseInt(value) || 0);
    newEa[id] = numValue;
    setEa(newEa);
  };

  // 총 합계 계산 (각 제품의 소계 총합)
  const totalAmount = table.reduce((sum, item, index) => {
    const qty = ea[index] || 0;
    const itemSubtotal = item.price * qty + (qty > 0 ? item.delivery_price : 0);
    return sum + itemSubtotal;
  }, 0);

  return (
    <div className="pageCard">
      <header className="pageHeader">
        <span className="badge">예제 #16</span>
        <h1>16. 데이터 임포트 & 실시간 연산</h1>
        <h2>외부 상품 데이터를 가져와 수량 입력을 실시간으로 반영하여 소계 및 총액을 계산합니다.</h2>
      </header>

      <div className={style1.tableWrapper}>
        <table className={style1.table}>
          <thead>
            <tr>
              <th>제품명</th>
              <th>단가</th>
              <th style={{ width: "120px" }}>수량</th>
              <th>카테고리</th>
              <th>배송료</th>
              <th style={{ textAlign: "right" }}>소계</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => {
              const qty = ea[index] || 0;
              const subtotal = item.price * qty + (qty > 0 ? item.delivery_price : 0);
              return (
                <tr key={index}>
                  <td style={{ fontWeight: "700" }}>{item.product_name}</td>
                  <td className={style1.priceText}>{item.price.toLocaleString()} 원</td>
                  <td>
                    <input
                      min="0"
                      type="number"
                      className={style1.qtyInput}
                      value={ea[index]}
                      onChange={handleNum}
                      id={index}
                    />
                  </td>
                  <td>
                    <span className={style1.badgeCategory}>{item.category}</span>
                  </td>
                  <td className={style1.priceText}>{item.delivery_price.toLocaleString()} 원</td>
                  <td className={style1.subtotalText} style={{ textAlign: "right" }}>
                    {subtotal.toLocaleString()} 원
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={style1.summaryContainer}>
        <span className={style1.summaryLabel}>🛒 선택된 모든 제품의 총 주문 합계 금액</span>
        <span className={style1.summaryVal}>{totalAmount.toLocaleString()} 원</span>
      </div>
    </div>
  );
};

export default Table;



