document.addEventListener('DOMContentLoaded', () => {
    const memberButtons = document.querySelectorAll('.btn-members');
    
    const modals = document.querySelectorAll('.modal');
    
    const closeButtons = document.querySelectorAll('.close-button');

    memberButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalTargetId = button.getAttribute('data-modal-target');
            const targetModal = document.querySelector(modalTargetId);
            
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const modal = closeButton.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});