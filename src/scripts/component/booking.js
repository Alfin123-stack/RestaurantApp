class Booking extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <section tabindex="0" class="booking" id="booking">
        <h2 tabindex="0">BOOKING TEMPAT</h2>
        <form action="">
            <div class="fullname">
                <label for="fullname">Full Name</label>
                <input type="text" id="fullname" placeholder="Nama Lengkap">
            </div>

            <div class="information">
                <div class="email">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="example@gmail.com">
                </div>
                <div class="phone">
                    <label for="phone">Phone</label>
                    <input type="text" id="phone" placeholder="+62">
                </div>
            </div>

            <div class="message">
                <label for="textarea">
                    Type your message here...
                </label>
                <textarea id="textarea" rows="4" placeholder="ketik sesuatu..."></textarea>
            </div>
            <button type="submit" class="submit-form">Submit</button>
        </form>
    </section>
                    `
  }
}

customElements.define('booking-form', Booking)
export default Booking
