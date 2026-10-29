document.getElementById('year').textContent = new Date().getFullYear();
        // When a service link is clicked, include that service in the WhatsApp enquiry.
        const whatsappButton = document.getElementById('contact-whatsapp');
        document.querySelectorAll('[data-service]').forEach(link => {
            link.addEventListener('click', () => {
                const service = link.dataset.service;
                const message = `Hi VkDigital! I'm interested in ${service}. Could we discuss the details and pricing?`;
                whatsappButton.href = 'https://wa.me/918378836293?text=' + encodeURIComponent(message);
            });
        });
