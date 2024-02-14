import ProductCount from '../ProductCount';
import './styles.css';

export default function Header() {

  return (
    <header>
      <div className="dsf-container dsf-header-container">
        <h1>DSFilter</h1>
        <ProductCount />
      </div>
    </header>
  );
}
