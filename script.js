<script>
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex > 0) 
        ? currentTestimonialIndex - 1 
        : testimonials.length - 1;
    showTestimonial(currentTestimonialIndex);
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex < testimonials.length - 1) 
        ? currentTestimonialIndex + 1 
        : 0;
    showTestimonial(currentTestimonialIndex);
}

// Show the first testimonial by default
showTestimonial(currentTestimonialIndex);
</script>