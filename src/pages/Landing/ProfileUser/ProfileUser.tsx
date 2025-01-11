import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProfileUser.scss";
import userImg from "@/assets/cus1.jpg";
import { Tag, message } from "antd";
import Breadcrumbs from "../../../layouts/Breadcrumbs/Breadcrumbs";

const ProfileUser = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | File>("");
  const [user, setUser] = useState({ imageUrl: "" });
  const [peachCoin, setPeachCoin] = useState(0);
  const [peachPoint, setPeachPoint] = useState(0);

  // Lấy thông tin người dùng từ API khi component mount
  const fetchUserProfile = async () => {
    // try {
    //   setEmail(response.data.data.email);
    //   setName(response.data.data.name);
    //   setAddress(response.data.data.address);
    //   setPhone(response.data.data.phone);
    //   setImage(response.data.data.image);
    //   setId(response.data.data.id);
    //   setPeachCoin(response.data.data.peachCoin);
    //   setPeachPoint(response.data.data.peachPoint);
    // } catch (error) {
    //   console.error("Error fetching user profile", error);
    // }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  // Cập nhật thông tin người dùng
  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    navigate("/");

  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  };

  const handleImageUpload = async () => {
  };


  return (
    <>
      <Breadcrumbs title="My Profile" pagename="Set Up" />
      
      <section className="profile-section d-flex flex-column justify-content-center align-items-center">
      <h3 className="h3 font-bold m-3">Fill Your Profile</h3>

        <Card className="shadow-sm w-50">
          <Card.Header className="border-bottom">
            <div className="profile-img-container">
              <img

                src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                alt="Profile"
                className="profile-img"
              />
              <div className="image-upload">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  id="image-upload-input"
                  className="d-none"
                />

                <Button
                  variant="primary"
                  onClick={() => document.getElementById("image-upload-input")?.click()}
                  className="upload-btn"
                >
                  Upload Image
                </Button>
              </div>
            </div>
          </Card.Header>
          <Card.Body
            style={{ display: "flex", flexDirection: "column", backgroundColor: "transparent", color: "var(--white)" }}>
          
            <hr />
            <Form 
              onSubmit={handleUpdateProfile}
              style={{ padding: "0 1rem"}}>
              <Form.Group controlId="name" className="mb-4">
                <Form.Label style={{color:"var(--black)"}}>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email" className="mb-4">
                <Form.Label style={{color:"var(--black)"}}>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                />
              </Form.Group>

              <Form.Group controlId="phone" className="mb-4">
                <Form.Label style={{color:"var(--black)"}}>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Button
                className="primaryBtn mb-4"
                type="submit"
                disabled={loading}
              >
                {loading ? "Updating..." : "START"}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </section>
    </>
  );
};

export default ProfileUser;
