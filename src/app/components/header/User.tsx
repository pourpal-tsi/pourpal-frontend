import Image from 'next/image'

export default function User() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <Image
                        src="https://tsi.lv/wp-content/uploads/2020/02/alexander_grakovski.png"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    );
}