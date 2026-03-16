## what is the react functional component at the end of the day ?? It is just a normal javascript function.

> what is a class Based Component ?? It is basically a normal javascript class only.

> how to create class based component ?? class keyword and then the name of the component what is the name of the class based component, it is UserDetailsClass.To make this a component we will extend, so I will extends React.Component.So this is the way for react to tell that this is a classBased component.this becomes a classBased component

## class UserDetailsClass extends React.Component {}

> Basically this extends React.Component will make React know that this is a class Based Component.So know React will start tracking it.

> Inside the class I will basically have a render method over here,this render method will return a piece of JSX which will be displayed onto the UI.So, render() method will return some piece of JSX.Now if you compare it with the functional component,what is a functional component it is a function that returns some piece of JSX. Similarly class based component is a class which has a render method which returns some piece of JSX.

> A functional component is a function which returns some piece of JSX, a class based component is a class, which extends React.Component and it has a render method that returns some piece of JSX.This is the JSX which will be converted into HTML and rendered onto the webpage


**this react.component is basically a class which is given to us by react and UserDetailsClass is inheriting some properties from it.Basically this React.component is given to us by React.That means We will have to import it from somewhere.Where does this React.Component comes from**

> this React.Component is a class which is there inside "react" (import React from "react").this react package.Component class is there inside the React Package.just like the functional component we will also export our class Based component.


## Let us see How can we pass props to our classBased Component ???? How will I receive props in my classBased component ???


> In this class, we will create a constructor, this class will have a constructor and this constructor will now receive the props => constructor(props){}
    
> inside this constructor we will also have to use the super(props).

> In the class Based components we get the props inside the constructor we definitely have to use the super(props).it is mandatory to write super(props), if you do'not write super(props) then the console.log(props) will throw an error


**Why it is mandatory to write super(props)**

> How will I use props (name) inside my JSX ??? inside my render function, so over here you will have to do something like {this.props.name}

> You will always have to use a this keyword inside your class, so that this props can be accessed inside my class.

