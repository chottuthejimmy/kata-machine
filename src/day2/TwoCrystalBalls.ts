export default function two_crystal_balls(breaks: boolean[]): number {
        const jmpAmt = Math.floor(Math.sqrt(breaks.length));
        let i = jmpAmt;
        for(; i < breaks.length; i += jmpAmt) {
                if(breaks[i]){
                    for(i -= jmpAmt; i < breaks.length; i++) {
                        if(breaks[i]) {
                            return i;
                        }
                    }
                }
        }
        return -1;
}