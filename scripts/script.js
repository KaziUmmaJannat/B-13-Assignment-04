let TotalCount = document.getElementById('totalCount');
let InterviewCount = document.getElementById('interviewCount');
let RejectedCount = document.getElementById('rejectedCount');

const allCard = document.getElementById('all-card');

function calculatedCount(){
    TotalCount.innerText = allCard.children.length
}
calculatedCount();