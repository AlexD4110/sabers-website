import { useRef, useState, useEffect } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9]{10}$/;
const REGISTER_URL = 'http://localhost:5134/auth/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [playerFirstName, setPlayerFirstName] = useState('');
    const [playerLastName, setPlayerLastName] = useState('');
    const [parentName, setParentName] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const [gradeLevel, setGradeLevel] = useState('');
    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState(false);
    const [gender, setGender] = useState('');

    const [street, setStreet] = useState('');
    const [town, setTown] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const [emergencyContact, setEmergencyContact] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        setValidPhone(PHONE_REGEX.test(phone));
    }, [phone]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PHONE_REGEX.test(phone);
        if (!v1 || !v2) {
            setErrMsg("Invalid Email or Phone Number");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, {
                playerFirstName,
                playerLastName,
                parentName,
                email,
                gradeLevel,
                phone,
                gender,
                street,
                town,
                state,
                zip,
                emergencyContact
            }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(response?.data);
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <Container className="d-flex justify-content-center mt-5">
                    <Card style={{ width: '50rem' }}>
                        <Card.Body>
                            {errMsg && <Alert ref={errRef} variant="danger" aria-live="assertive">{errMsg}</Alert>}
                            <h1 className="text-center">Tryout Registration</h1>
                            <Form onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridPlayerFirstName">
                                        <Form.Label>Player's First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
                                            ref={userRef}
                                            onChange={(e) => setPlayerFirstName(e.target.value)}
                                            value={playerFirstName}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridPlayerLastName">
                                        <Form.Label>Player's Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={(e) => setPlayerLastName(e.target.value)}
                                            value={playerLastName}
                                            required
                                        />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridParentName">
                                    <Form.Label>Parent/Guardian Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Parent/Guardian Name"
                                        onChange={(e) => setParentName(e.target.value)}
                                        value={parentName}
                                        required
                                    />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email (Parent/Guardian)</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                            isInvalid={email && !validEmail}
                                            isValid={validEmail}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Invalid Email Address.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPhone">
                                        <Form.Label>Phone Number (Parent/Guardian)</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            placeholder="10-digit phone number"
                                            onChange={(e) => setPhone(e.target.value)}
                                            value={phone}
                                            isInvalid={phone && !validPhone}
                                            isValid={validPhone}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Invalid Phone Number.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridGradeLevel">
                                        <Form.Label>Grade Level</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Current Grade Level"
                                            onChange={(e) => setGradeLevel(e.target.value)}
                                            value={gradeLevel}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select
                                            onChange={(e) => setGender(e.target.value)}
                                            value={gender}
                                            required
                                        >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Street"
                                        onChange={(e) => setStreet(e.target.value)}
                                        value={street}
                                        required
                                    />
                                </Form.Group>
                                
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridTown">
                                        <Form.Label>Town</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Town"
                                            onChange={(e) => setTown(e.target.value)}
                                            value={town}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="State"
                                            onChange={(e) => setState(e.target.value)}
                                            value={state}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Zip Code"
                                            onChange={(e) => setZip(e.target.value)}
                                            value={zip}
                                            required
                                        />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridEmergencyContact">
                                    <Form.Label>Emergency Contact</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Emergency Contact"
                                        onChange={(e) => setEmergencyContact(e.target.value)}
                                        value={emergencyContact}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Tryout Registration
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            )}
        </>
    );
}

export default Register;
