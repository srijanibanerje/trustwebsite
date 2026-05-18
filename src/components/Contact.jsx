import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div
      style={{
        padding: '60px 8%',
        // background: '#f8f9fa',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        {/* Left Side */}
        <div>
          <h1
            style={{
              fontSize: '42px',
              marginBottom: '20px',
              color: '#222',
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              fontSize: '17px',
              lineHeight: '30px',
              color: '#555',
              marginBottom: '35px',
            }}
          >
            We would love to hear from you. Whether you have a question,
            feedback, or business inquiry, feel free to connect with us through
            our social media platforms or visit our location on the map.
          </p>

          {/* Social Media Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}
          >
            {/* Facebook */}
            <div
              style={{
                background: '#fff',
                padding: '25px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <FaFacebookF size={28} color="#1877F2" />
              <h3 style={{ marginTop: '15px', color: '#222' }}>Facebook</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Follow us for updates and community posts.
              </p>
            </div>

            {/* Instagram */}
            <div
              style={{
                background: '#fff',
                padding: '25px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <FaInstagram size={28} color="#E1306C" />
              <h3 style={{ marginTop: '15px', color: '#222' }}>Instagram</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                See our latest photos, reels, and stories.
              </p>
            </div>

            {/* Twitter */}
            <div
              style={{
                background: '#fff',
                padding: '25px',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <FaTwitter size={28} color="#1DA1F2" />
              <h3 style={{ marginTop: '15px', color: '#222' }}>Twitter</h3>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Stay connected with our latest announcements.
              </p>
            </div>
          </div>

          {/* Extra Social */}
          <div
            style={{
              marginTop: '25px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}
          >
            {/* <FaLinkedinIn size={22} color="#0A66C2" />
            <span style={{ color: '#555' }}>
              Connect with us professionally on LinkedIn.
            </span> */}
          </div>
        </div>

        {/* Right Side - Google Map */}
        <div>
          <div
            style={{
              width: '100%',
              height: '500px',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.846353028348!2d88.363895!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a5e0e1b8f9%3A0x8c4f8e9f8f5b5c0f!2sKolkata!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact