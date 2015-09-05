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
        renderMainLayout(<UserLogin />)
    }
});


exposed.route("/", {
    name: "Home",
    action(params) {
        renderMainLayout(<Home />)
    }
});


renderMainLayout = (component) => {
    ReactLayout.render(MainLayout, {
        header: <Header />,
        content: component,
        footer: <Footer />
    })
}