const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint to get menu (if needed for future expansion)
app.get('/api/menu', (req, res) => {
    const menuData = [
        {
            id: 1,
            name: "Bruschetta",
            description: "Toasted bread topped with tomatoes, garlic, and fresh basil",
            category: "appetizers",
            image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        // ... other menu items
    ];
    res.json(menuData);
});

// API endpoint to handle WhatsApp message requests (if needed for future expansion)
app.post('/api/send-whatsapp', (req, res) => {
    const { dishName, customerPhone } = req.body;
    
    // In a real implementation, you would integrate with WhatsApp Business API here
    console.log(`Received request for ${dishName} from ${customerPhone}`);
    
    // For now, we'll just return a success message
    res.json({ 
        success: true, 
        message: `Price inquiry for ${dishName} has been sent to the restaurant.` 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
