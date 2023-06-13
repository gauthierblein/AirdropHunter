import data from '../../dataAirdrop.json'
import  "./airdropslist.css"


const AirdropList = () => {

    return (
        
        <div className="airdrops-container">
            {data.map(({ id, title, blockchain, description, picture }) => (
            <div key={id} className="airdrop">
                <div className='airdrop-infos'>
                    <h2>{title}</h2>
                    <p>{title}</p>
                    <p>{blockchain}</p>
                    <p>{description}</p>    
                </div>
                <div>
                    <img src={picture} alt="" />
                </div>
            </div>
          ))}

        </div>
    )

}

export default AirdropList