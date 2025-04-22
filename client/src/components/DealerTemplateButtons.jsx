function DealerTemplateButtons({ onClick }) {
    return (
      <>
        <button type="button" name="buy" onClick={onClick}>
          Buy
        </button>
        <button type="button" name="lease" onClick={onClick}>
          Lease
        </button>
      </>
    )
  }
  
  export default DealerTemplateButtons
  