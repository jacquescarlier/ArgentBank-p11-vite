import Button from "../button/button"
import { useNavigate, useLocation } from "react-router-dom";

export default function AccountCard({ title, amount, description, titleButton, id }) {
  const navigate = useNavigate()
  const location = useLocation();

  const handleTransactions = (e) => {
    e.preventDefault()
    if (location.pathname === '/profiles/') {
      navigate('/transactions/', { state: { title, amount, description, id } });
    } else {
      navigate('/profiles/', { state: { title, amount, description, id } });
    }
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          classButton="transaction-button"
          type="onClick"
          title={titleButton}
          onClick={handleTransactions}
        />
      </div>
    </section>
  );
}

