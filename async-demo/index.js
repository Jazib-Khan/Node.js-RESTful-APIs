console.log('Before');
getUser(1, (getRepositories));
console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getComits);
}

function getComits(repos) {
    getComits(repo, (displayCommits));
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'Jaz' })
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            callback(['commit']);
        }, 2000);
    });
}