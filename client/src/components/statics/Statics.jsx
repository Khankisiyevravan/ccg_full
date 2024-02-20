import React from 'react'

const Statics = () => {
  return (
    <section
    id="counter"
    class="parallax padding"
    style={{ marginTop: "100px" }}
  >
    <div class="container">
      <h2 class="hidden">hidden</h2>
      <div class="row number-counters">
        <div class="fl_page_five flex_page_one counters-item text-center">
          <i class="fa-regular fa-layer-group"></i>
          <strong>1235</strong>
          <p>Proyekt</p>
        </div>
        <div class="fl_page_five flex_page_one counters-item text-center">
          <i class="fa-light fa-trophy"></i>
          <strong>78</strong>
          <p>Tender</p>
        </div>
        <div class="fl_page_five flex_page_one counters-item text-center">
          <i class="fa-light fa-alarm-clock"></i>
          <strong>12</strong>
          <p>İllik təcrübə</p>
        </div>
        <div class="fl_page_five flex_page_one counters-item text-center">
          <i class="fa-light fa-face-smile"></i>
          <strong>89</strong>
          <p>Əməkdaşlıq</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Statics