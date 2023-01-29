import app from './src/app'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.info(`🚀 Server is running on port ${PORT} 🚀`)
})