const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className='col-md' id='PlaceInfo'>
                    <h1>{data.place.name}</h1>
                    <h2>Ratings</h2>
                    <p>Not Rated</p>
                    <h2>Description</h2>
                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </div>
            </main>
        </Def>
    )
}

module.exports = show
