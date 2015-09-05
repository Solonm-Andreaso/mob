Login = React.createClass({
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <KInput label="Username" type="text" name="username"/>
                        <KInput label="Password" type="password" name="password"/>
                    </div>
                </div>
            </div>
        )
    }
})
