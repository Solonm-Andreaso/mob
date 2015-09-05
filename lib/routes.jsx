//Route group for all
exposed = FlowRouter.group({})

//Route group for logged in users
loggedIn = FlowRouter.group({
    triggersEnter: [function(context, redirect) {
        if(!Meteor.userId()) {
            FlowRouter.go("Login")
        }
    }]
})

exposed.route("/Login", {
    name: "Login",
    action(params) {
        renderMainLayout(<Login />)
    }
});

exposed.route('/Register', {
    name: "Register",
    action(params) {
        renderMainLayout(<Register />)
    }
})


exposed.route("/", {
    name: "Home",
    action(params) {
        renderMainLayout(<Home />)
    }
});

FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
        renderMainLayout(<NotFound />)
    }
};

renderMainLayout = (component) => {
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    })
}
