import './register.css'

const Register = () => {
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="slider register"></div>
                <form action="" method="post" className="register-form">
                    <h1>Create account</h1>
                    <div className="form-input-group">
                        <label htmlFor="username">UserName</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password(min 6 characters)"
                            required
                        />
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            name="password"
                            id="confirm-password"
                            placeholder="Confirm password(min 6 characters)"
                            required
                        />
                    </div>
                    <div className="form-input-group">
                        <button type="submit">Register</button>
                        <p>
                            Already have account ? <a href="/login">Log in</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

