import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { handleSuccess } from './render-functions.js';

const BASE_URL = 'https://pixabay.com/api/?key=';
const API_KEY = '46052576-a4ef4f0d52180e04b4399e04b';

export const formField = document.querySelector('.form');

export function handleSubmit(event) {
  const gallery = document.querySelector('.gallery');
  const loaderEl = document.querySelector('.loader');
  const formElInputValue = formField.elements.state.value;
  event.preventDefault();

  gallery.innerHTML = '';

  if (!formElInputValue) {
    iziToast.error({
      message: 'Please enter your request',
      position: 'bottomRight',
    });
    return;
  }

  loaderEl.style.display = 'inline-block';
  fetch(
    `${BASE_URL}${API_KEY}&q=${formElInputValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=30`
  )
    .then(response => response.json())
    .then(data => {
      loaderEl.style.display = 'none';

      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
        });
        return;
      }
      const markup = handleSuccess(data.hits);
      gallery.insertAdjacentHTML('beforeend', markup);

      const library = new SimpleLightbox('.gallery a', {
        captionDelay: 300,
        captionsData: 'alt',
      });

      library.refresh();
    })
    .catch(error => {
      loaderEl.style.display = 'none';
      console.log(error);
    });
}
