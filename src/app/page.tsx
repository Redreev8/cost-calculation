import FlipCard from '@/ui/flip-card'
import ScrollBar from '@/ui/scroll-bar'

const Home = async () => {
    return (
        <ScrollBar valueScrool={16}>
            <>
                <FlipCard>
                    <div>Lorem, </div>
                    <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate hic veritatis veniam
                        maiores blanditiis, sunt, aspernatur, mollitia sapiente sequi autem voluptatum nobis ipsum unde.
                        Molestias, numquam? Mollitia sit modi provident.
                    </div>
                </FlipCard>
            </>
        </ScrollBar>
    )
}

export default Home
