import { GitHubCalendar } from "react-github-calendar";

export default function GithubCalendarComponent() {
    return (
        <div className="flex flex-col items-center py-10">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                GitHub Contributions
            </h2>

            <div className="bg-gray-900 dark:bg-black p-5 rounded-2xl overflow-x-auto max-md:w-[600px] max-sm:w-[500px] shadow-lg">
                <GitHubCalendar
                    username="athulcoder"
                    colorScheme="dark"
                    fontSize={14}
                />
            </div>

            <a href="https://github.com/athulcoder" target="_blank" className="px-4 py-2 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-black cursor-pointer hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors duration-300 shadow-md">See my github</a>
        </div>
    );
}