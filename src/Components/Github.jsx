import React, { useEffect, useState } from 'react';
import { githubCommitIndicatorUsername, githubToken } from "../config/config";

const Github = () => {
    const [commitCount, setCommitCount] = useState(null);

    useEffect(() => {
        const fetchCommitData = async () => {
            const todayDate = new Date();
            const today = todayDate.toISOString().split('T')[0];

            const oneYearAgoDate = new Date();
            oneYearAgoDate.setFullYear(todayDate.getFullYear() - 1);
            const oneYearAgo = oneYearAgoDate.toISOString().split('T')[0];

            const query = `
                query {
                    user(login: "${githubCommitIndicatorUsername}") {
                        contributionsCollection(from: "${oneYearAgo}", to: "${today}") {
                            contributionCalendar {
                                weeks {
                                    contributionDays {
                                        date
                                        contributionCount
                                    }
                                }
                            }
                        }
                    }
                }
            `;

            try {
                const response = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${githubToken}`,
                    },
                    body: JSON.stringify({ query }),
                });

                const result = await response.json();

                if (!result.data) {
                    console.error('No data returned', result);
                    return;
                }

                let todaysCommitCount = 0;
                result.data.user.contributionsCollection.contributionCalendar.weeks.forEach(week => {
                    week.contributionDays.forEach(day => {
                        if (day.date === today) {
                            todaysCommitCount = day.contributionCount;
                        }
                    });
                });

                setCommitCount(todaysCommitCount);
            } catch (error) {
                console.error('Error fetching commit data:', error);
            }
        };

        fetchCommitData();
    }, [githubCommitIndicatorUsername]);

    return (
        <div style={{ textAlign: 'center', padding: '1rem' }}>
            {commitCount !== null ? (
                <div>
                    <h3>Today's Commits: {commitCount}</h3>
                    {commitCount > 0 ? (
                        <p style={{ color: 'green' }}>Great job committing today!</p>
                    ) : (
                        <p style={{ color: 'red' }}>No commits today. Let's code!</p>
                    )}
                </div>
            ) : (
                <p>Loading commit data...</p>
            )}

            {/* GitHub Stats Section */}
            <div style={{ marginTop: '20px' }}>
                <h3>GitHub Stats for {githubCommitIndicatorUsername}</h3>
                <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubCommitIndicatorUsername}&show_icons=true&locale=en&layout=compact`}
                    alt="Top Languages"
                    style={{ maxWidth: '100%', marginBottom: '10px' }}
                />
                <img
                    src={`https://github-readme-stats.vercel.app/api?username=${githubCommitIndicatorUsername}&show_icons=true&locale=en`}
                    alt="GitHub Stats"
                    style={{ maxWidth: '100%', marginBottom: '10px' }}
                />
                <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubCommitIndicatorUsername}`}
                    alt="GitHub Streak"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
};

export default Github;
