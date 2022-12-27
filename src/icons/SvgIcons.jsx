import React from 'react'

const SvgIcons = ({ icon }) => {

    // RA - RecentActivities Component Icons
    const RAicon1 = (
        <div className={`w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3`}>
            <svg className="w-9 h-9 text-indigo-50 fill-current" viewBox="0 0 36 36"><path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg>
        </div>
    );
    const RAicon2 = (
        <div className={`w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3`}>
            <svg className="w-9 h-9 text-red-50 fill-current " viewBox="0 0 36 36"><path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"></path></svg>
        </div>
    );
    const RAicon3 = (
        <div className={`w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3`}>
            <svg className="w-9 h-9 text-light-blue-50 fill-current " viewBox="0 0 36 36"><path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z"></path></svg>
        </div>
    )

    const TrelloCheckbox = (
        <svg className="h-4 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M11 4c-3.855 0-7 3.145-7 7v28c0 3.855 3.145 7 7 7h28c3.855 0 7-3.145 7-7V11c0-3.855-3.145-7-7-7zm0 2h28c2.773 0 5 2.227 5 5v28c0 2.773-2.227 5-5 5H11c-2.773 0-5-2.227-5-5V11c0-2.773 2.227-5 5-5zm25.234 9.832l-13.32 15.723-8.133-7.586-1.363 1.465 9.664 9.015 14.684-17.324z"></path></svg>

    )

    const TrelloBadgeIcon = (
        <svg className="h-4 fill-white -m-0.4 px-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z"></path></svg>

    )

    switch (icon) {
        case "RAicon1":
            return RAicon1;
        case "RAicon2":
            return RAicon2;
        case "RAicon3":
            return RAicon3;
        case "TrelloCheckbox":
            return TrelloCheckbox;
        case "TrelloBadgeIcon":
            return TrelloBadgeIcon;
        default:
            return null;
    }
}

//default look of our icons
//pass width, height and stroke props to override these
// SvgIcons.defaultProps = {
//     stroke: "#000",
//     color: 'red',
//     backgroundColor: 'green'
// }

export default SvgIcons