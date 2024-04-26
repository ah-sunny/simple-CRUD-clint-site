import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loaderUser = useLoaderData()
    const [getUser, setGetUser] = useState(loaderUser)

    const handleAddUser = (e) => {
        e.preventDefault();
        const forms = new FormData(e.currentTarget)
        const name = forms.get('name')
        const email = forms.get('email')
        const user = { name, email }
        console.log(name, email, user)

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('in post responsee', data)
                const newUser = [...getUser, data]
                console.log('recently added :',newUser)
                if (data.insertedId) {
                    alert("succesful")
                }
                e.target.reset()
            })

    }

    const handleDelete = (id) => {
        console.log('delete this id', id)

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log("in delete part:", data)
                const reaminingUser = getUser.filter(user => user._id !== id)
                setGetUser(reaminingUser)

                if(data.deletedCount>0){
                    alert('deleted successfully');}
            })
    }
    return (
        <div>

            <div>
                <form onSubmit={handleAddUser} className="p-5 border-2 rounded-md">
                    <label className="input input-bordered flex items-center gap-2">
                        Name:
                        <input type="text" name="name" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email:
                        <input type="text" name="email" className="grow" placeholder="daisy@site.com" />
                    </label>
                    <button className="btn btn-primary">Add User</button>
                </form>
            </div>
            <h1 className="text-2xl font-bold my-4">User list : {getUser.length} </h1>
            <div>
                {
                    getUser.map(user => <li key={user._id}>
                        Name: {user?.name} ---- Email: 
                        {user?.email} 
                        <Link to={`/update/:${user?._id}`}>
                        <button className="btn btn-primary">Update</button>
                        </Link>
                        <button onClick={() => handleDelete(user?._id)} className="btn" >X</button>

                    </li>)
                }

            </div>

        </div>
    );
};

export default Users;