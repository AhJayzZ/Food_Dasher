// src/components/EditRestaurant/EditRestaurant.js
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Image } from "react-bootstrap";
import "./EditRestaurant.css";
import RestautantNavbar from "../RestautantNavbar/RestautantNavbar";

import * as restaurantAPI from "../../API/restaurant";
import { useUser } from "../UserProvider/UserProvider";

function EditRestaurant() {
  const user = useUser();

  const [restaurantExist, setRestaurantExist] = useState(true);
  const [submitStatus, setSubmitStatus] = useState(null); // add new state to show status

  const [restaurant, setRestaurant] = useState({});

  const [uuid, setUUID] = useState("Null");
  const [name, setName] = useState("Example Restaurant");
  const [description, setDescription] = useState(
    "This is an example description."
  );
  const [address, setAddress] = useState("123 Example Street");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [logoURL, setLogoURL] = useState(null); // New state for the logo URL
  const [logo, setLogo] = useState(null); // New state for the logo

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("Processing...");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("user_uuid", user.uuid);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("phone_number", phoneNumber);
    if (logo) formData.append("logo", logo);

    let res;

    if (restaurantExist)
      res = await restaurantAPI.putRestauarnt(uuid, formData);
    else res = await restaurantAPI.postRestauarnt(formData);

    if (res.status === 200 || res.status === 201) setSubmitStatus("Success!");
    else setSubmitStatus("Failed!");

    fetchData(user); // fetch data after submit
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setLogoURL(URL.createObjectURL(file));
    }
  };

  const fetchData = async (user) => {
    const restaurants = await restaurantAPI.getRestauarnt();
    const restaurant = restaurants.data.find(
      (restaurant) => restaurant.user.uuid === user.uuid
    );

    if (restaurant) {
      setUUID(restaurant.uuid);
      setName(restaurant.name);
      setDescription(restaurant.description);
      setAddress(restaurant.address);
      setPhoneNumber(restaurant.phone_number);
      setLogoURL(restaurant.logo);
      setRestaurant(restaurant);
      setRestaurantExist(true);
    } else setRestaurantExist(false);
  };

  useEffect(() => {
    fetchData(user);
  }, [user]);

  return (
    <div>
      <RestautantNavbar />

      <div className="edit-restaurant-page">
        <Container className="edit-restaurant-container">
          <h2 className="edit-restaurant-title">Edit Your Restaurant</h2>
          <Card className="edit-restaurant-current-info-card">
            <Card.Body>
              {logoURL && (
                <Image
                  className="edit-restaurant-logo"
                  src={logoURL}
                  alt="Restaurant Logo"
                />
              )}
              <p>
                <strong>Name:</strong> {restaurant.name}
              </p>
              <p>
                <strong>Description:</strong> {restaurant.description}
              </p>
              <p>
                <strong>Address:</strong> {restaurant.address}
              </p>
              <p>
                <strong>Phone Number:</strong> {restaurant.phone_number}
              </p>
            </Card.Body>
          </Card>

          {submitStatus && <p>{submitStatus}</p>}

          <Form onSubmit={handleSubmit} className="edit-restaurant-form">
            <Form.Group>
              <Form.Label>Logo: </Form.Label>
              <Form.Control type="file" onChange={handleLogoChange} />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>New Name: </Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>New Description: </Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>New Address: </Form.Label>
              <Form.Control
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group>
              <Form.Label>New Phone Number: </Form.Label>
              <Form.Control
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <div className="edit-restaurant-btn-submit-container">
              <Button
                variant="success"
                type="submit"
                className="edit-restaurant-btn-submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default EditRestaurant;
