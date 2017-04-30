<div class=interieur>
		
				<h1>Générateur de QRCode</h1>
				<p> Voici un QRCode : </p>
					<div>
						<div id="qrcode"></div>
						<script type="text/javascript">
						var qrcode = new QRCode(document.getElementById("qrcode"), {
							text: "http://base.io",
							width: 128,
							height: 128,
							colorDark : "#000000",
							colorLight : "#ffffff",
							correctLevel : QRCode.CorrectLevel.H
						});
					</div>
		</div>
