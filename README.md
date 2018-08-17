# Facenovel

Facenovel is a Facebook clone that lets you create an account, add friends, and
view their profiles. In the future, you will be able to create posts, post on
your friends' walls, and comment on posts!

[Live Site](https://facenovel.herokuapp.com/#/)

## Technologies Used

Facenovel is a single-page application that uses React and Redux to store the
current state of the application and update the different components accordingly.
It has a Ruby on Rails backend that stores all the users and friend relations
between them. The frontend uses JQuery AJAX requests to then retrieve that data
to display things such as a user's information on their profile page.

## Code Samples

One Facebook-specific feature that I implemented was custom user profile URLs,
as opposed to looking up the user by their id in the backend. This is an example
of the type of request I would make to the Rails backend - which required some
custom routing.
``` js
// JQuery AJAX request gets sent to Rails
export const findUserByUrl = userUrl => (
  $.ajax({
    url: `api/users/${userUrl}`,
    method: 'GET'
  })
)
```

``` rb
# routes.rb Custom route in Ruby sends the user_url information to
# the UsersController
get '/users/:user_url', to: 'users#show'
```

Another challenge I faced was trying to figure out how to implement friends.
A few factors I had to take into account were being able to send a request,
but also be able to cancel that request, as well as accept or deny a friend
request that was received.

To do this, I represented friends in my database as a relation between two users,
and a boolean value stating the status of the request. If the request is accepted, the two users are friends, otherwise the request is pending.
``` rb
# Table name: friends
#
#  id            :bigint(8)        not null, primary key
#  requesting_id :integer          not null
#  requested_id  :integer          not null
#  accepted      :boolean          default(FALSE)
```

These are some of the functions I created to handle a user approving, canceling, or denying a request.

``` js
export const sendFriendRequest = (requestingId, requestedId) => (
  $.ajax({
    url: 'api/friends',
    method: 'POST',
    data: {friend: {requestingId, requestedId}}
  })
);

export const approveFriendRequest = friendId => (
  $.ajax({
    url: `api/friends/${friendId}`,
    method: 'PATCH'
  })
);

export const denyFriendRequest = friendId => (
  $.ajax({
    url: `api/friends/${friendId}`,
    method: 'DELETE'
  })
);
```


## Features

As of now, all you can do on Facenovel is grow your network. Once you create an
account, you are able to add friends, respond to friend requests, and view their
profiles.

### Signup Page

* #### Creating an account:
<img width="1038" alt="screen shot 2018-08-17 at 3 26 13 pm" src="https://user-images.githubusercontent.com/9375829/44291271-2bb2c200-a232-11e8-8593-e05897b2da96.png">

* #### Sending a friend request:
<img width="1071" alt="screen shot 2018-08-17 at 3 10 19 pm" src="https://user-images.githubusercontent.com/9375829/44291290-500e9e80-a232-11e8-8552-1b8e37b92493.png">

* #### Accepting a friend request:
![accept_friend_request](https://user-images.githubusercontent.com/9375829/44291359-a8de3700-a232-11e8-8ed1-66b6dca4612e.gif)
