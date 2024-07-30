document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownContent = this.querySelector('.dropdown-content');
            const triangle = this.querySelector('.dropdown-triangle');

            if (dropdownContent.classList.contains('dropdown-active')) {
                dropdownContent.classList.remove('dropdown-active');
            } else {
                dropdownContent.classList.add('dropdown-active');
            }

            if (triangle.classList.contains('triangle-active')){
                triangle.classList.remove('triangle-active');
                triangle.classList.add('triangle-deactive');
            } else {
                triangle.classList.remove('triangle-deactive');
                triangle.classList.add('triangle-active');
            }
        });
    });
});