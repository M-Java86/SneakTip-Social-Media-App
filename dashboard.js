const form = document.querySelector('#new-post-form');
const input = document.querySelector('#new-post-input');
const testimonialsContainer = document.querySelector('#testimonials');

let testimonials = [];

// Load testimonials from local storage
if (localStorage.getItem('testimonials')) {
  testimonials = JSON.parse(localStorage.getItem('testimonials'));
}

// Render testimonials
function renderTestimonials() {
  testimonialsContainer.innerHTML = '';
  testimonials.forEach((testimonial, index) => {
    const div = document.createElement('div');
    div.innerHTML = testimonial;

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.onclick = () => {
      handleEdit(index);
    };
    div.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = () => {
      handleDelete(index);
    };
    div.appendChild(deleteButton);

    testimonialsContainer.appendChild(div);
  });
}

// Handle add testimonial
function handleTaskSubmit() {
  testimonials.push(input.value);
  localStorage.setItem('testimonials', JSON.stringify(testimonials));
  input.value = '';
  renderTestimonials();
}

// Handle edit testimonial
function handleEdit(index) {
  input.value = testimonials[index];
  testimonials.splice(index, 1);
  localStorage.setItem('testimonials', JSON.stringify(testimonials));
  renderTestimonials();
}

// Handle delete testimonial
function handleDelete(index) {
  testimonials.splice(index, 1);
  localStorage.setItem('testimonials', JSON.stringify(testimonials));
  renderTestimonials();
}

renderTestimonials();

form.onsubmit = handleTaskSubmit;
