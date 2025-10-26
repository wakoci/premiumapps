
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    // Initialize select elements
    const appSelect = document.getElementById('app-select');
    const accountTypeSelect = document.getElementById('account-type');
    const durationSelect = document.getElementById('duration');
    
    // Set initial disabled states
    accountTypeSelect.disabled = true;
    durationSelect.disabled = true;
// Form handling
    const orderForm = document.querySelector('form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Get form values
            const name = document.getElementById('name').value;
            const contact = document.getElementById('contact').value;
            
            // Validate form
            if (!name || !contact) {
                alert('Harap isi semua field yang diperlukan');
                return;
            }
        // Enable only the first select (app-select)
        accountTypeSelect.disabled = false;
// Immediately show app selection (remove hidden class if any)
            document.getElementById('app-selection-section').classList.remove('hidden');
            
            // Scroll to app selection
            document.getElementById('app-selection-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    // App pricing data - updated to match exact requirements
    const appPricing = {
        netflix: {
            types: [
                { name: "SHARING 1P1U", durations: [
                    { name: "1 DAY", price: 6000 },
                    { name: "2 DAY", price: 8000 },
                    { name: "3 DAY", price: 10000 },
                    { name: "1 WEEK", price: 15000 },
                    { name: "1 MONTH", price: 35000 }
                ]},
                { name: "SHARING 1P2U", durations: [
                    { name: "1 MONTH", price: 26000 }
                ]},
                { name: "SEMI PRIVATE", durations: [
                    { name: "1 MONTH", price: 40000 }
                ]}
            ]
        },
        vidio: {
            types: [
                { name: "SHARING 2U", durations: [
                    { name: "1 MONTH", price: 25000 }
                ]},
                { name: "PRIVATE", durations: [
                    { name: "1 MONTH", price: 35000 }
                ]}
            ]
        },
        wetv: {
            types: [
                { name: "SHARING", durations: [
                    { name: "1 MONTH", price: 20000 },
                    { name: "1 YEAR", price: 35000 }
                ]},
                { name: "PRIVATE", durations: [
                    { name: "1 MONTH", price: 35000 }
                ]}
            ]
        },
        viu: {
            types: [
                { name: "PRIVATE", durations: [
                    { name: "1 MONTH", price: 10000 },
                    { name: "2 MONTH", price: 18000 }
                ]}
            ]
        },
        prime: {
            types: [
                { name: "SHARING", durations: [
                    { name: "1 MONTH", price: 25000 }
                ]},
                { name: "PRIVATE", durations: [
                    { name: "1 MONTH", price: 35000 }
                ]}
            ]
        },
        canva: {
            types: [
                { name: "INVITE", durations: [
                    { name: "1 MONTH", price: 6000 },
                    { name: "2 MONTH", price: 12000 },
                    { name: "4 MONTH", price: 18000 },
                    { name: "12 MONTH", price: 30000 }
                ]},
                { name: "DESIGNER +1K", durations: [
                    { name: "1 MONTH", price: 20000 }
                ]}
            ]
        },
        capcut: {
            types: [
                { name: "SHARING 3U", durations: [
                    { name: "1 MONTH", price: 15000 }
                ]},
                { name: "PRIVATE", durations: [
                    { name: "1 MONTH", price: 25000 }
                ]}
            ]
        },
        youtube: {
            types: [
                { name: "FAMPLAN", durations: [
                    { name: "1 MONTH", price: 8000 },
                    { name: "2 MONTH", price: 15000 }
                ]}
            ]
        },
        apple: {
            types: [
                { name: "IMESS/INVITE", durations: [
                    { name: "1 MONTH", price: 15000 },
                    { name: "2 MONTH", price: 25000 }
                ]}
            ]
        },
        iqiyi: {
            types: [
                { name: "SHARING", durations: [
                    { name: "1 MONTH", price: 10000 }
                ]},
                { name: "PRIVATE", durations: [
                    { name: "1 MONTH", price: 35000 }
                ]}
            ]
        },
        loklok: {
            types: [
                { name: "SHARING", durations: [
                    { name: "1 MONTH", price: 25000 }
                ]}
            ]
        }
};
    // Handle app selection
const totalPriceElement = document.getElementById('total-price');
    const continueBtn = document.getElementById('continue-btn');

    appSelect.addEventListener('change', function() {
        const selectedApp = this.value;
        
        // Clear previous options
        accountTypeSelect.innerHTML = '<option value="">-- Pilih Jenis --</option>';
        durationSelect.innerHTML = '<option value="">-- Pilih Durasi --</option>';
        totalPriceElement.textContent = 'Rp0';
        
        if (selectedApp && appPricing[selectedApp]) {
            // Populate account types
            appPricing[selectedApp].types.forEach(type => {
                const option = document.createElement('option');
                option.value = type.name;
                option.textContent = type.name;
                accountTypeSelect.appendChild(option);
            });
            
            // Enable account type selection
            accountTypeSelect.disabled = false;
        } else {
            accountTypeSelect.disabled = true;
            durationSelect.disabled = true;
        }
    });

    accountTypeSelect.addEventListener('change', function() {
        const selectedApp = appSelect.value;
        const selectedType = this.value;
        
        // Clear previous options
        durationSelect.innerHTML = '<option value="">-- Pilih Durasi --</option>';
        totalPriceElement.textContent = 'Rp0';
        
        if (selectedApp && selectedType && appPricing[selectedApp]) {
            const type = appPricing[selectedApp].types.find(t => t.name === selectedType);
            if (type) {
                // Populate durations
                type.durations.forEach(duration => {
                    const option = document.createElement('option');
                    option.value = duration.price;
                    option.textContent = `${duration.name} - Rp${duration.price.toLocaleString('id-ID')}`;
                    durationSelect.appendChild(option);
                });
                
                // Enable duration selection
                durationSelect.disabled = false;
            }
        } else {
            durationSelect.disabled = true;
        }
    });
    durationSelect.addEventListener('change', function() {
        if (this.value) {
            totalPriceElement.textContent = `Rp${parseInt(this.value).toLocaleString('id-ID')}`;
        } else {
            totalPriceElement.textContent = 'Rp0';
        }
    });
continueBtn.addEventListener('click', function() {
        if (!appSelect.value || !accountTypeSelect.value || !durationSelect.value) {
            alert('Harap lengkapi semua pilihan aplikasi');
            return;
        }
        // Use static QR code
        document.querySelector('#payment-section img').src = "https://huggingface.co/spaces/kivenmexico/wakoci-streamy-deals/resolve/main/images/QRIS%20WAKOCI.jpg";
// Show payment section (remove hidden class if any)
        document.getElementById('payment-section').classList.remove('hidden');
        
        // Scroll to payment section
        document.getElementById('payment-section').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
// Handle payment proof upload
    const paymentProof = document.getElementById('payment-proof');
    if (paymentProof) {
        paymentProof.addEventListener('change', function() {
            // Show receipt section
            document.getElementById('receipt-section').classList.remove('hidden');
            // Scroll to receipt
            document.getElementById('receipt-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update receipt details
            document.getElementById('receipt-name').textContent = document.getElementById('name').value || '-';
            const now = new Date();
            document.getElementById('receipt-date').textContent = `${now.toLocaleDateString('id-ID')} ${now.toLocaleTimeString('id-ID', {hour: '2-digit', minute:'2-digit'})}`;
// Update receipt items
            const receiptItems = document.getElementById('receipt-items');
            receiptItems.innerHTML = '';
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'flex justify-between text-sm mb-1';
            itemDiv.innerHTML = `
                <span>${appSelect.options[appSelect.selectedIndex].text}</span>
                <span class="font-mono">Rp${parseInt(durationSelect.value).toLocaleString('id-ID')}</span>
            `;
            receiptItems.appendChild(itemDiv);
            document.getElementById('receipt-total').textContent = `Rp${parseInt(durationSelect.value).toLocaleString('id-ID')}`;
            // Add event listener for download button
            document.getElementById('download-receipt').addEventListener('click', function() {
                const receiptElement = document.getElementById('receipt-section');
                const options = {
                    scale: 2,
                    backgroundColor: null,
                    logging: false,
                    useCORS: true
                };
                
                // Load html2canvas if not already loaded
                if (typeof html2canvas === 'undefined') {
                    const script = document.createElement('script');
                    script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
                    script.onload = function() {
                        generateReceiptImage(receiptElement, options);
                    };
                    document.head.appendChild(script);
                } else {
                    generateReceiptImage(receiptElement, options);
                }
            });

            function generateReceiptImage(element, options) {
                html2canvas(element, options).then(canvas => {
                    const link = document.createElement('a');
                    const fileName = `bukti-pembayaran-wakoci-${Date.now()}.png`;
                    link.download = fileName;
                    link.href = canvas.toDataURL('image/png', 1.0);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    // Send data to Bexel
                    const formData = new FormData();
                    formData.append('name', document.getElementById('name').value);
                    formData.append('contact', document.getElementById('contact').value);
                    formData.append('app', appSelect.options[appSelect.selectedIndex].text);
                    formData.append('price', durationSelect.value);
                    formData.append('date', new Date().toISOString());
                    
                    // Convert canvas to blob and add to form data
                    canvas.toBlob(function(blob) {
                        formData.append('proof', blob, fileName);
                        
                        // Send to Bexel API
                        fetch('https://bexel-api-url.com/submit', {
                            method: 'POST',
                            body: formData
                        }).then(response => response.json())
                          .then(data => console.log('Bexel response:', data))
                          .catch(err => console.error('Bexel error:', err));
                    }, 'image/png');
                }).catch(err => {
                    console.error('Error generating receipt:', err);
                    alert('Gagal mengunduh struk. Silakan coba lagi atau screenshot manual.');
                });
            }
});
    }
});

function initAnimations() {
    // GSAP animations for sections
    gsap.utils.toArray('section').forEach((section, i) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: i * 0.1
        });
    });
    
    // Hover animations for app cards
    gsap.utils.toArray('.app-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, { 
                scale: 1.02, 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                duration: 0.3 
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, { 
                scale: 1, 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                duration: 0.3 
            });
        });
    });
}