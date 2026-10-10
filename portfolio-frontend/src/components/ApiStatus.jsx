export default function ApiStatus({ loading, error, retry, empty }) {
  if (loading) {
    return <p role="status">Loading portfolio data...</p>;
  }

  if (error) {
    return (
      <div role="alert">
        <p>{error}</p>
        <button className="race-button" type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (empty) {
    return <p>No information is available yet.</p>;
  }

  return null;
}
