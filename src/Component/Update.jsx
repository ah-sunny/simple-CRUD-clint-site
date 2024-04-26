import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();


    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const user = { name, email }
        console.log(user)

        
        // fetch(`http://localhost:5000/users/${loaderUser?._id}`, {
        //     method: "PUT",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(user)
        // })
        // .then(res=>res.JSON())
        // .then(data=>{
        //     console.log('inPut part:',data)
        // })

    }

    return (
        <div>
            <h1>updated information : {loadedUser.name}  </h1>

            <div>
                <form onSubmit={handleUpdate} className="mt-5 ">
                    <label className="input input-bordered flex items-center gap-2">
                        Name:
                        <input type="text" name="name" className="grow" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email:
                        <input type="text" name="email" className="grow" />
                    </label>
                    <button className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;