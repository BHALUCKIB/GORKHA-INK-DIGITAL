import http.server
import socketserver
import os

PORT = 8080

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Set caching headers for image files to ensure high performance scrolling
        _, ext = os.path.splitext(self.path.lower())
        if ext in ['.jpg', '.jpeg', '.png', '.svg', '.gif']:
            self.send_header('Cache-Control', 'public, max-age=31536000')
        else:
            self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

# Change working directory to ensure it serves files relative to this script
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

# Allow reuse of address to prevent "address already in use" errors on restarts
socketserver.TCPServer.allow_reuse_address = True

with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
    print(f"\n==================================================")
    print(f"  Gorkha Ink magazine website is running!")
    print(f"  Localhost Link: http://localhost:{PORT}/")
    print(f"==================================================\n")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server...")
        httpd.server_close()
