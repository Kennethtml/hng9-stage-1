import React from 'react'
import {Link} from 'react-router-dom'

function Links() {
  return (
    <section className="lists">
      <a href="https://twitter.com/akhere_e">Twitter Link</a>
      <a href="https://training.zuri.team/" id='btn__zuri'>Zuri Team</a>
      <a href="http://books.zuri.team" id='books'>Zuri Books</a>
      <a href=" https://books.zuri.team/python-for-beginners?ref_id=kennethtml" id='book__python'>
        Python Books
      </a>
      <a href="https://background.zuri.team" id='pitch'>Background Check for Coders</a>
      <a href="https://books.zuri.team/design-rules " id='book__design'> Design Books</a>
      <Link to={'/contact'} id='contact'> Contact Me</Link>
    </section>
  );
}

export default Links