import React from 'react';
import '../../styles/FAQ.css';
function FAQ() {
  const handleToggle = index => {
    document
      .querySelectorAll('.question-panel-box')
      .item(index)
      .classList.toggle('panel-expanded');
    document
      .querySelectorAll('.toggle-icon')
      .item(index)
      .classList.toggle('fa-chevron-up');
  };

  return (
    <section className='faq-container'>
      <h1 className='section-header'>FAQ</h1>
      <h1 className='section-header subheader '>Frequently Asked Questions</h1>
      <div tabIndex='0' className='question-panel-box'>
        <span className='toggle-icon fas fa-chevron-down'></span>
        <h2 onClick={handleToggle.bind(this, 0)} className='panel-title'>
          How Long should my service take?
        </h2>
        <div className='panel-answer'>
          <p>
            Typical turnaround time work for all jobs is 10-12 business days
            after clubs arrive at my shop.
          </p>
          <span className='faq-social-icons'>
            <ul className='icon-list'>
              <li className='fab fa-twitter icon-item'></li>
              <li className='fab fa-facebook-f icon-item'></li>
            </ul>
          </span>
        </div>
      </div>
      <div tabIndex='1' className='question-panel-box'>
        <span className='toggle-icon fas fa-chevron-down'></span>
        <h2 onClick={handleToggle.bind(this, 1)} className='panel-title'>
          What if the parts our out of stock?
        </h2>
        <div className='panel-answer'>
          <p>
            We will do our best to keep out website updated with ONLY parts that
            are in stock. If we see an order with a part on it that is out of
            stock, we will quickly notify the customer and a decision will be
            made then.
          </p>
          <span className='faq-social-icons'>
            <ul className='icon-list'>
              <li className='fab fa-twitter icon-item'></li>
              <li className='fab fa-facebook-f icon-item'></li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  );
}
export default FAQ;
