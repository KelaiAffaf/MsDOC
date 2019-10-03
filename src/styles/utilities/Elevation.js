const elevation = (
    { color = 'rgba(0,0,0,0.2)', level = 1 } = {
        color: 'rgba(0,0,0,0.2)',
        level: 1
    }
) => `box-shadow: 0 ${level * 3}px ${level * 6}px ${color}`;

export { elevation };
export default elevation;
