import './App.css';
import {useState} from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handlerModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <div>something</div>
      <button onClick={handlerModal}>Open modal</button>
      {showModal && <Modal text={"any text placed in a modal window gsdgsrdgsrdgrgregregreg fgrgreg grdgsrdrdgr sdf efaff ffdghrtj eghwreth fddd/"}
                           closeHandler={() => handlerModal()}
                           // action={<button>Something</button>}
      />}
      <div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis culpa magnam mollitia officiis
          porro quis! Amet, culpa exercitationem id maiores natus nisi odit omnis quia, quo soluta velit voluptate.
        </div>
        <div>Accusamus alias aliquam consectetur consequuntur cupiditate dignissimos, dolorum enim impedit ipsa neque
          perferendis quae quam quasi, reprehenderit veritatis. Architecto, at deleniti libero obcaecati quis saepe
          tempora temporibus unde veritatis voluptas!
        </div>
        <div>Deserunt illum repudiandae tempora. Amet, at autem dicta dolorem doloremque dolorum eaque earum excepturi
          exercitationem itaque maxime molestiae molestias necessitatibus non nostrum omnis perferendis placeat
          praesentium ratione reiciendis reprehenderit voluptates.
        </div>
        <div>A culpa doloribus eum labore laudantium minima modi repudiandae sed? Aliquam, animi aut commodi consectetur
          ea explicabo fugit impedit iste odio pariatur quidem repellat reprehenderit sapiente suscipit tempora unde
          vel?
        </div>
        <div>Aperiam autem beatae consequuntur delectus deserunt dolorem dolores doloribus ducimus ea enim excepturi
          fuga iusto labore laborum laudantium natus neque quia reiciendis repellendus sunt unde vel voluptate
          voluptatem, voluptates voluptatibus!
        </div>
        <div>Adipisci consequatur, earum nobis omnis quo vero. Culpa cupiditate distinctio earum esse et eveniet
          expedita facere, illo illum ipsa iure, obcaecati porro praesentium, quo quod reprehenderit rerum saepe sequi
          voluptate!
        </div>
        <div>Accusantium dolores ex, exercitationem facere illo inventore nobis sed unde veniam. Dolor eos excepturi hic
          id illo quo recusandae sequi sunt vero. Architecto doloremque hic provident, quisquam repellat unde velit.
        </div>
        <div>A aliquid beatae commodi cupiditate dolorem ex hic ipsam iste magni molestiae molestias, nesciunt, nulla
          officiis perferendis placeat possimus quaerat reiciendis repudiandae tempora unde ut, vel veritatis vero vitae
          voluptatem?
        </div>
        <div>A atque culpa cupiditate enim fuga fugiat inventore ipsum iure labore laudantium libero maiores nam
          nesciunt nihil odio, quasi qui quisquam rem repellendus, rerum soluta tempora velit veritatis voluptas
          voluptatum?
        </div>
        <div>A aspernatur assumenda at beatae cumque, dignissimos dolorum ea, eligendi explicabo facere harum ipsa
          labore laudantium minus mollitia nihil, nobis nostrum praesentium quidem quisquam ratione repellat
          reprehenderit! Consequatur, dicta, doloremque?
        </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem blanditiis dolorum eum fuga harum
          nostrum odio pariatur suscipit. Assumenda cum magnam perspiciatis quam reiciendis reprehenderit, rerum saepe
          sed voluptas?
        </div>
        <div>Adipisci, blanditiis dignissimos, distinctio, est facere itaque laboriosam non possimus quae quibusdam
          repellat suscipit tempora ullam? Ad architecto consectetur consequuntur dignissimos distinctio earum fugiat
          laudantium, nesciunt nobis non qui, quod!
        </div>
        <div>Aliquid asperiores corporis debitis deserunt dolor ducimus error esse est, hic iste labore maxime nam neque
          nesciunt nobis nostrum officiis optio, perferendis quam quibusdam repellendus saepe sed veritatis vitae
          voluptas.
        </div>
        <div>Delectus deleniti deserunt fugiat inventore, magni nemo nobis quasi repudiandae sed. Autem consectetur,
          corporis deserunt dicta ea error eum incidunt libero magni modi nam obcaecati optio, placeat provident sit
          tenetur!
        </div>
        <div>A aliquam aliquid, aut, consequuntur ea eius esse labore minima nemo neque officiis quas quisquam quos. Ab
          aliquid aperiam beatae iste quia quod suscipit. Autem facilis id minima molestias numquam!
        </div>
        <div>Adipisci autem cumque nostrum quis reiciendis temporibus. Adipisci assumenda at commodi et hic illo rem
          temporibus. Aut consequuntur dolorum exercitationem explicabo, id incidunt libero magni nostrum perferendis
          sed suscipit unde?
        </div>
        <div>Deleniti doloribus facere id ipsa iusto, libero provident tempora. Dolorem doloremque ea, expedita fuga
          harum hic in magnam necessitatibus optio rem repellat repudiandae similique, velit. Assumenda modi obcaecati
          quos vel.
        </div>
        <div>Ad consectetur, deserunt dicta itaque nisi pariatur reprehenderit totam! Ab earum esse eum ex iure nam
          perferendis unde ut. Ad dolorum eius eos eveniet ex expedita sed? Porro, ullam, voluptate?
        </div>
        <div>Cumque, est in. Beatae, blanditiis commodi consectetur consequatur excepturi in labore magnam mollitia
          perspiciatis porro quo repellendus similique sint soluta vero voluptatem voluptatibus. Aut, consectetur cumque
          dolore harum ullam veniam?
        </div>
        <div>Animi blanditiis culpa dolore eligendi error expedita explicabo fugit ipsa ipsam labore laboriosam nam
          nihil odit officia omnis ratione recusandae, vitae! Doloremque, earum, necessitatibus? Eum molestias placeat
          provident rem repellat.
        </div>
        <div>Architecto debitis delectus, dolorem fuga iste necessitatibus nostrum nulla perferendis velit veniam!
          Adipisci cum deleniti dolorem ducimus molestias nemo quibusdam voluptatum! Ab aut corporis dolorem, inventore
          ipsum molestias porro repellat?
        </div>
        <div>Ad consectetur consequatur delectus explicabo qui quidem sint tenetur ut vitae voluptate. Consequuntur
          cumque dolor minus omnis! Alias aliquam consequuntur doloribus id laboriosam magnam, officiis qui quia
          reprehenderit soluta ullam.
        </div>
        <div>Aliquam amet consequatur culpa, debitis dicta est et eum, fugiat praesentium quo, quos rerum sunt tenetur
          totam unde ut veritatis. Accusamus amet delectus dolores laudantium maxime nobis quos sequi veniam?
        </div>
        <div>Accusantium alias architecto delectus dolorem doloribus ducimus eaque exercitationem iusto, maiores minus
          quia quod ratione recusandae sequi tempora. Aliquam eius facilis harum ipsam iste molestias natus odio
          sapiente voluptatibus voluptatum.
        </div>
        <div>Assumenda, corporis dicta dolorem dolores facere facilis id inventore minima odio, qui similique soluta.
          Beatae eveniet ipsum neque quae quibusdam, ullam vero voluptate? Adipisci distinctio eius enim facilis, quasi
          voluptatum.
        </div>
        <div>Deleniti dolore doloremque dolorum earum expedita, harum, id iusto laboriosam magni nemo nihil nobis non
          odit perferendis provident quis quos repellendus, reprehenderit sunt tempore unde ut vel veniam. Debitis, et?
        </div>
        <div>Aliquid amet aperiam asperiores culpa cum dolore doloremque doloribus est exercitationem explicabo fugiat
          harum hic illo laborum natus nemo perferendis praesentium quas quasi, ratione recusandae repellat saepe sit
          vel veniam!
        </div>
        <div>Animi atque consectetur eaque facere illo non, quae reiciendis? Accusantium autem commodi eius eligendi
          esse et ex, facere fuga, ipsa labore magni molestiae quam quasi qui quibusdam repellat sapiente totam!
        </div>
        <div>Assumenda, blanditiis cumque, ea esse et, ipsam minima nam nostrum numquam pariatur quas rem sit soluta
          velit veritatis. Adipisci aliquid atque consequatur dolorum facere illo ipsa libero, magnam quia voluptatibus!
        </div>
        <div>Aliquam consequuntur excepturi explicabo facere iure officia recusandae reiciendis sed, vero? Accusamus
          beatae dolorum inventore itaque modi mollitia obcaecati quae quod totam? Deleniti eos, eum facere fuga
          incidunt ipsa rerum.
        </div>
        <div>Aliquam consequuntur cum, dolorem exercitationem laboriosam modi molestiae nobis quam. A adipisci assumenda
          consectetur cupiditate est et explicabo, hic ipsum laudantium maiores officia, repellendus sapiente sit
          suscipit vel vitae voluptates.
        </div>
        <div>Adipisci deserunt ducimus eos et eum exercitationem molestiae, molestias odio quis veritatis. Blanditiis
          doloremque, earum excepturi fugit ipsam minus nesciunt porro possimus praesentium quos rem sit sunt ullam vel
          voluptas.
        </div>
        <div>Accusamus consequatur dolor dolorum eius, enim, est exercitationem harum hic impedit ipsa iusto
          necessitatibus nostrum officia pariatur quia quibusdam, quis rem unde veritatis voluptates! Ab accusamus
          consectetur itaque odit porro?
        </div>
        <div>Accusantium deserunt, dignissimos, doloremque dolores ducimus est exercitationem expedita inventore ipsa
          ipsum iusto labore modi molestiae nihil optio perferendis placeat quasi repudiandae sapiente sint sit tempora
          velit vero voluptatibus voluptatum?
        </div>
        <div>Deserunt eveniet ipsam nobis porro quis. Dolor doloribus ipsa libero voluptates voluptatibus! Asperiores
          dignissimos dolore harum illo, in nostrum quibusdam quis temporibus vero vitae. Consequatur impedit omnis
          tempore unde voluptate.
        </div>
        <div>Aperiam aspernatur autem commodi consectetur corporis deleniti dicta dignissimos dolores doloribus dolorum
          earum, eius eos error ex iusto laboriosam magnam minima minus odit optio porro quas quisquam, reprehenderit
          unde voluptatum.
        </div>
        <div>Dolore doloremque enim ex explicabo fugit hic labore molestias quasi. Asperiores eaque nam quibusdam quos
          veniam. Architecto, consequatur cumque dolorum eveniet ipsa unde. Eius et itaque numquam. Debitis, esse nulla.
        </div>
        <div>Asperiores at beatae corporis eius eligendi esse, excepturi exercitationem fuga fugit illo illum incidunt
          inventore iste iure iusto modi nesciunt perferendis quidem quis quos ratione recusandae repellat,
          reprehenderit totam veritatis.
        </div>
        <div>Aliquam deserunt earum enim facilis magni nesciunt optio quaerat, ratione rerum sapiente! Accusamus
          adipisci aliquid, atque consectetur dicta distinctio dolore enim eum eveniet, fugiat necessitatibus, nulla
          odit optio quidem reprehenderit.
        </div>
        <div>Aliquid, hic impedit inventore numquam quas quasi quisquam repudiandae. Accusantium aliquam autem dicta
          dolorum, exercitationem labore libero minima necessitatibus neque, nesciunt numquam odit, quibusdam quo soluta
          velit voluptate voluptatibus voluptatum.
        </div>
        <div>Ad, atque beatae doloremque dolores est eveniet hic incidunt inventore itaque iure iusto molestiae nesciunt
          nulla odio provident quaerat quas quod reprehenderit repudiandae sapiente totam vero voluptatibus! Accusantium
          blanditiis, reiciendis?
        </div>
        <div>Delectus excepturi harum odit vel veritatis! Aliquam consequuntur cumque dicta distinctio dolores eveniet
          facere illum itaque magnam minima, non perspiciatis quae qui, quidem quo ratione repellat reprehenderit
          sapiente veritatis voluptatum?
        </div>
        <div>Autem molestias odio pariatur quae soluta. Ad dicta et fugit minima quod, sequi. A accusamus adipisci
          debitis doloremque ducimus excepturi, exercitationem harum magnam officia porro provident quam tempora
          temporibus tenetur!
        </div>
        <div>Accusantium aut autem debitis dolorem ea eos error ex exercitationem expedita facere in magnam maiores
          mollitia nemo, numquam placeat praesentium quasi quod quos sequi suscipit tempora ullam vero! Iste, laborum!
        </div>
        <div>Aliquam atque blanditiis deleniti dicta dolor, error expedita inventore ipsa minima molestiae quod, sequi
          unde veritatis. Ab adipisci enim expedita fugit inventore itaque nemo odio, quibusdam ratione sequi, tempora
          unde!
        </div>
        <div>Adipisci consectetur consequatur cum debitis doloremque ea, eaque eius in incidunt ipsum magni minus modi
          nemo omnis placeat porro quia quod repudiandae rerum ullam unde voluptate voluptatum! Error iste, recusandae!
        </div>
        <div>Ab accusamus aliquid consequuntur cum eius eos libero modi nulla numquam obcaecati, omnis quasi quo
          repellendus rerum soluta tempora voluptatem? Accusamus aliquid autem cupiditate esse eum inventore quo quod
          rerum.
        </div>
        <div>Accusamus, adipisci, alias architecto beatae consequuntur cumque cupiditate deleniti distinctio, dolorem
          eligendi enim et eum explicabo facilis iusto molestiae mollitia nam nobis officia omnis optio quidem ratione
          reprehenderit sint voluptatibus.
        </div>
        <div>Accusamus asperiores aspernatur beatae commodi cum ducimus explicabo hic ipsam, iusto laudantium libero
          nemo nostrum numquam odit porro quia quis quisquam ratione recusandae repellat repellendus rerum sapiente sed
          ullam voluptatibus?
        </div>
        <div>Aliquid beatae cupiditate, dolorem ea eaque eligendi esse ex expedita explicabo id iure iusto laboriosam
          maiores minus molestias obcaecati officiis perferendis praesentium provident quia recusandae repellat ullam
          vitae. Necessitatibus, ut.
        </div>
        <div>Culpa dicta maiores modi nam, nobis obcaecati quos ullam voluptate! A, adipisci aperiam architecto corporis
          cum explicabo illum labore libero magnam, magni molestiae, neque porro quibusdam rem saepe soluta voluptatem.
        </div>
        <div>A atque aut consectetur consequatur cum dolore, est facilis hic in maxime molestiae necessitatibus non
          perspiciatis placeat sapiente sequi sint! Ea impedit, ipsam. Ab alias at, minima natus quas voluptate.
        </div>
        <div>Atque delectus et fugit, ipsa ipsam laborum nesciunt officia perferendis quas recusandae rem sequi
          similique sint suscipit tempore, ullam voluptas! Aspernatur consequuntur id iure modi possimus similique sint
          vero! Iure.
        </div>
        <div>Aspernatur cumque labore nisi velit. A aliquid aspernatur, corporis dicta esse, ex exercitationem facere
          hic illo iste iusto, modi neque odio quibusdam quo quos rem similique suscipit vitae voluptate voluptatibus?
        </div>
        <div>Adipisci enim esse fugit maiores neque, odit optio perferendis, possimus quae, quibusdam ullam unde. At
          dignissimos ex id, impedit laborum provident qui! Alias, deleniti eaque earum enim omnis suscipit voluptas.
        </div>
        <div>A commodi delectus distinctio dolores ex, hic id ipsam ipsum nobis odio placeat possimus quam quas velit
          voluptatem. Assumenda consectetur eos facere iure labore nostrum odio pariatur placeat reprehenderit voluptas.
        </div>
        <div>Architecto assumenda autem beatae commodi culpa cum cumque deleniti eos explicabo hic ipsam laboriosam
          laborum magnam, mollitia natus nemo provident quae quas quo quod sint tenetur totam veniam vero voluptas?
        </div>
        <div>Autem culpa in laudantium necessitatibus nisi quisquam repudiandae rerum similique? Aliquid asperiores
          commodi cumque debitis distinctio ducimus eaque earum expedita, harum itaque obcaecati porro quisquam
          reprehenderit repudiandae sequi tempora temporibus.
        </div>
        <div>Ad corporis cum deserunt dolorem eius eligendi, error modi nam obcaecati quidem saepe similique sit soluta
          ullam voluptatum. Alias aperiam culpa dicta dignissimos earum ipsam nesciunt possimus provident ullam velit!
        </div>
        <div>Adipisci autem debitis deserunt dolor dolores quae saepe sapiente! Ab aperiam blanditiis, commodi cum
          ducimus eveniet hic illo in iusto libero, minus, mollitia nam non odit placeat praesentium quis voluptatem.
        </div>

      </div>
      </div>
      );
      }

      export default App;
