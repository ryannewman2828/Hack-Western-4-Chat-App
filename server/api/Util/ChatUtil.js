
const ChatUtil = {};

ChatUtil.isMatch = function (student1, student2) {
    if ((student1.stress.percentile >= 0.75 && student2.sympathy.percentile >= 0.75) ||
        (student2.stress.percentile >= 0.75 && student1.sympathy.percentile >= 0.75)) {
        return true
    }
    if ((student1.outgoing.percentile >= 0.75 && student2.outgoing.percentile <= 0.5) ||
        (student2.outgoing.percentile >= 0.75 && student1.outgoing.percentile <= 0.5)) {
        return true
    }
    if ((student1.needsExcitement.percentile >= 0.75 && student2.adventerous.percentile >= 0.75) ||
        (student2.needsExcitement.percentile >= 0.75 && student1.adventerous.percentile >= 0.75)) {
        return true
    }
    if ((student1.needsStability.percentile >= 0.75 && student2.adventerous.percentile <= 0.5) ||
        (student2.needsStability.percentile >= 0.75 && student1.adventerous.percentile <= 0.5)) {
        return true
    }
    if ((student1.altruism.percentile >= 0.75 && student2.melancholy.percentile >= 0.75) ||
        (student2.altruism.percentile >= 0.75 && student1.melancholy.percentile >= 0.75)) {
        return true
    }
    return false;
};

module.exports = ChatUtil;
