import template1 from './_components/cards.hbs';
import template2 from './_components/footer.hbs';
import template3 from './_components/header.hbs';
import template4 from './_components/modal.hbs';
import template5 from './_components/modal_new.hbs';
import objects from '../../data/data.json';

const loader = () => {
  let html = template1({objects});
  let app = document.getElementById('cards');
  app.innerHTML = html;

  html = template2();
  app = document.getElementById('footer');
  app.innerHTML = html;

  html = template3();
  app = document.getElementById('nav');
  app.innerHTML = html;

  html = template4();
  app = document.getElementById('modal_1');
  app.innerHTML = html;

  html = template5();
  app = document.getElementById('new_modal');
  app.innerHTML = html;
};

export default loader;