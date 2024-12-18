import React, { useState } from 'react'; // استيراد useState

export default function ProductDetails () {

  const [showDetails, setShowDetails] = useState(false); // حالة لعرض/إخفاء التفاصيل

  const product = { // بيانات المنتج
    name: 'iPhone 14',
    price: '$1200',
    description: 'هاتف ذكي ممتاز بميزات متقدمة.',
  };

  const toggleDetails = () => { // دالة لتبديل حالة العرض/الإخفاء
    setShowDetails(!showDetails);
  };

  return (
    <>
    <div className="div"></div>
      <button onClick={ toggleDetails }  type="button"  class="btn btn-primary" id="liveAlertBtn">Show live alert  {showDetails ? 'إخفاء تفاصيل المنتج' : 'عرض تفاصيل المنتج'}</button>
     

      {showDetails && ( // عرض التفاصيل بشكل شرطي
        <div className="product-details"> {/* حاوية لعرض التفاصيل */}
          <h3>{product.name}</h3>
          <p>السعر: {product.price}</p>
          <p>{product.description}</p>
        </div>



      )}
    </>
  )
}
