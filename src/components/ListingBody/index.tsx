import "./styles.css";
import Filter from "../Filter";
import Listing from "../Listing";

export default function ListingBody() {
  return (
    <main>
      <section id="dsf-listing-section">
        <div className="dsf-container dsf-listing-container mb20">
          <Filter />
        </div>
        <div className="dsf-container dsf-listing-container">
          <Listing />
          <Listing />
          <Listing />
          <Listing />
          <Listing />
        </div>
      </section>
    </main>
  );
}
