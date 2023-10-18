document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const mobileMenu = document.getElementByClass('.mobile-menu');

    // Tambahkan event listener untuk tombol sidebar
    sidebarToggle.addEventListener('click', function() {
        // Toggle class 'open' pada mobile-menu
        mobileMenu.classList.toggle('open');
    });
});
