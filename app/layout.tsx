const RootLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>{children}</body>
        </html>
    )
}
export default RootLayout;