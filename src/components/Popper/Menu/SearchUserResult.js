import Tippy from "@tippyjs/react";
import Wrapper from "../Wrapper";
import MenuItem from "./MenuItem";

function SearchUserResult({ children, searchedUsers, handleClickUser }) {

    return (
        <Tippy
            trigger='click'
            target
            placement='bottom-start'
            interactive={true}
            render={attrs => (
                <>
                    {searchedUsers?.length > 0 && (
                        <Wrapper>
                            <ul className="content">
                                {searchedUsers.map((user, index) => {
                                    user.title = user.displayName
                                    user.icon = user.photoURL
                                    return <MenuItem key={index} data={user} onClick={(e) => handleClickUser(e, user)} />
                                })}
                            </ul>
                        </Wrapper>
                    )}
                </>
            )}
        >
            {children}
        </Tippy >
    )
}

export default SearchUserResult;
